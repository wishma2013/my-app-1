export = ActorClient;
export as namespace ActorClient;

declare module 'ActorClient' {
    export class ActorClient {
      requestCode(email: string):Promise;
    }
}