import { createAction, props, union } from '@ngrx/store';
import { ChatMessage } from 'src/models/messages/chat-message';

export enum ActionTypes {
  LOAD_PRIVATE_MESSAGES = '[Chat Messages] Load Private Messages',
  LOAD_PRIVATE_MESSAGES_SUCCESS = '[Chat Messages] Load Private Messages Success',
  LOAD_PRIVATE_MESSAGES_FAILURE = '[Chat Messages] Load Private Messages Failure',

  LOAD_GROUP_MESSAGES = '[Chat Messages] Load Group Messages',
  LOAD_GROUP_MESSAGES_SUCCESS = '[Chat Messages] Load Group Messages Success',
  LOAD_GROUP_MESSAGES_FAILURE = '[Chat Messages] Load Group Messages Failure',
}

export const loadPrivateMessages = createAction(ActionTypes.LOAD_PRIVATE_MESSAGES, props<{ recipientId: number }>());
export const loadPrivateMessagesSuccess = createAction(ActionTypes.LOAD_PRIVATE_MESSAGES_SUCCESS, props<{ messages: ChatMessage[] }>());
export const loadPrivateMessagesFailure = createAction(ActionTypes.LOAD_PRIVATE_MESSAGES_FAILURE, props<{ error: any }>());

export const loadGroupMessages = createAction(ActionTypes.LOAD_GROUP_MESSAGES, props<{ groupId: number }>());
export const loadGroupMessagesSuccess = createAction(ActionTypes.LOAD_GROUP_MESSAGES_SUCCESS, props<{ messages: ChatMessage[] }>());
export const loadGroupMessagesFailure = createAction(ActionTypes.LOAD_GROUP_MESSAGES_FAILURE, props<{ error: any }>());

const allActions = union({
  loadPrivateMessages,
  loadPrivateMessagesSuccess,
  loadPrivateMessagesFailure,
  loadGroupMessages,
  loadGroupMessagesSuccess,
  loadGroupMessagesFailure,
});

export type ChatMessagesActionUnion = typeof allActions;