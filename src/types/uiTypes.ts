export interface Feedback {
  feedback: {
    message: string;
    isSuccess: boolean;
  };
}

export interface uiState extends Feedback {
  isLoadingShowing: boolean;
}
