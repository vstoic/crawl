import { RECEIVE_CRAWL_ERRORS, 
         RECEIVE_CRAWL, 
         CLEAR_CRAWL_ERRORS } from "../actions/crawl_actions";
  
  const _nullErrors = [];
  
  const CrawlErrorsReducer = (oldState = _nullErrors, action) => {
    Object.freeze(oldState);
    switch(action.type) {
      case RECEIVE_CRAWL_ERRORS:
        return action.errors;
      case RECEIVE_CRAWL:
        return _nullErrors;
        case CLEAR_CRAWL_ERRORS:
          return _nullErrors;
      default:
        return oldState;
    }
  };
  
  export default CrawlErrorsReducer