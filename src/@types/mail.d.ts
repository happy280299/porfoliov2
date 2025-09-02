export {};

declare global {
  export type IMailLabel = {
    id: string;
    type: string;
    name: string;
    unreadCount?: number;
    color?: string;
  };

  type IMailSender = {
    name: string;
    email: string;
    avatar: null | string;
  };

  type IMailAttachment = {
    name: string;
    size: number;
    type: string;
    path: string;
    preview: string;
    dateCreated: Date;
    dateModified: Date;
  };

  type IMail = {
    id: string;
    labelIds: string[];
    folder: string | undefined;
    isImportant: boolean;
    isStarred: boolean;
    isUnread: boolean;
    subject: string;
    message: string;
    createdAt: Date | string | number;
    attachments: IMailAttachment[];
    from: IMailSender;
    to: IMailSender[];
  };

  // ----------------------------------------------------------------------

  type IMailListState = {
    byId: Record<string, IMail>;
    allIds: string[];
  };

  type IMailState = {
    isLoading: boolean;
    error: Error | string | null;
    mails: IMailListState;
    labels: IMailLabel[];
  };
}
