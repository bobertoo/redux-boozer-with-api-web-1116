export default function current_cocktail_reducer(state=2, action) {
  switch ( action.type ) {
    case 'UPDATE_CURRENT_COCKTAIL':
      return action.payload;
    default:
      return state;
  }
};
