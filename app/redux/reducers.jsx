import * as rConst from "reduxConstants";

export const currentProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case rConst.ADD_CURRENT_PROFILE:
      return {
        ...action.profile
      }
    case rConst.EDIT_CURRENT_PROFILE:
      return {
        ...state,
        ...action.editedInfo
      }
    case rConst.DELETE_CURRENT_PROFILE:
      return {}
    default:
      return state;
  }
}


export const currentDeckReducer = (state = {}, action) =>{
  switch (action.type) {
    case rConst.ADD_CURRENT_DECK:
      return {
        ...action.info
      }
    case rConst.EDIT_CURRENT_DECK:
      return {
        ...state,
        ...action.editedInfo
      }
    case rConst.DELETE_CURRENT_DECK:
      return {}
    default:
      return state;
  }
}


export const currentTestReducer = (state = {}, action) => {
  switch (action.type) {
    case rConst.ADD_TEST:
      return {
        ...action.details,
        currentQuestion     : Number(0),
        gotCorrect          : Number(0),
        gotWrong            : Number(0),
        answerDetails       : [],
      }
    case rConst.EDIT_TEST_START:
      return {
        ...state,
        timeStart           : new Date()
      }
    case rConst.EDIT_TEST_USER_ANSWERED:
      var answerDetails     = state.answerDetails
      answerDetails.push(action.details)

      return {
        ...state,
        answerDetails,
        gotCorrect          : (state.gotCorrect + (state.correct ? 1 : 0)),
        gotWrong            : (state.gotWrong + (state.correct ? 0 : 1)),
      }
    case rConst.DELETE_TEST:
      return {}
    default:
      return state;
  }
}