import { Action } from "redux";

export type ActionPayload<T extends string, P extends any> = Action<T> & {
  payload: P;
};

export type CreateAction<
  T extends Record<string, any>,
  K extends keyof T
> = Action<K> & T[K];

export type Handler<
  TState,
  TAction extends Record<string, any>,
  TOther extends string = "DEFAULT"
> = {
  [R in keyof TAction]: (state: TState, action: TAction[R]) => TState;
} & {
  [R in TOther]: (state: TState) => TState;
};

export const CreateReducer = (
  handlers: Handler<any, any>,
  state: Record<string, any>,
  action: Action
) => {
  const handler = handlers[action.type] ?? handlers.DEFAULT;
  return handler(state, action as any);
};
