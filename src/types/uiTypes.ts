export interface Feedback {
  feedback: {
    message: string;
    isSuccess: boolean;
  };
}

export interface UiState extends Feedback {
  isLoadingShowing: boolean;
}
