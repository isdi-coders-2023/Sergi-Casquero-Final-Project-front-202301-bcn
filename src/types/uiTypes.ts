export interface Feedback {
  message: string;
  isSuccess: boolean;
}

export interface UiState {
  isLoadingShowing: boolean;
  feedback: Feedback;
}
