export interface StateProps {
  state: any;
}

export const saveState = ({ state }: StateProps): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore error
  }
};
