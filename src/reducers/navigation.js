import { 
  TOGGLE_SIDEBAR, 
  OPEN_SIDEBAR, 
  CLOSE_SIDEBAR, 
  CHANGE_ACTIVE_SIDEBAR_ITEM, 
  CHAT_TOGGLE_ITEM,  
} from '../actions/navigation';

const initialState = {
  sidebarOpened: false,
  sidebarStatic: false,
  chatToggleItem: false,
  activeItem: JSON.parse(localStorage.getItem('staticSidebar')) ? window.location.pathname : null,
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarStatic: !state.sidebarStatic,
      };
    case OPEN_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: true,
      });
    case CLOSE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: false,
      });
    case CHANGE_ACTIVE_SIDEBAR_ITEM:
      return {
        ...state,
        activeItem: action.activeItem,
      };
    case CHAT_TOGGLE_ITEM:
      return {
        ...state,
        chatToggleItem: true,
      }
    default:
      return state;
  }
}
