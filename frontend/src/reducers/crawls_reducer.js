import { RECEIVE_ALL_CRAWLS, RECEIVE_CRAWL } from "../actions/crawl_actions";

const _nullState = {
    byId: {},
    allIds: []
};

const crawlsReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_CRAWLS:
            // nextState.byId = action.crawls.crawlsById;
            nextState.allIds = action.crawls
            return nextState;
        case RECEIVE_CRAWL:

   

            nextState.byId= action.crawl;

            return nextState;
        default:
            return oldState;
    }
};

export default crawlsReducer;