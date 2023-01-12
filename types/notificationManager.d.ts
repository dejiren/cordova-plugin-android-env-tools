export = NotificationManager;
declare function NotificationManager(): void;
declare namespace NotificationManager {
    const SERVICE_NAME: string;
    const IMPORTANCE_DEFAULT: number;
    const IMPORTANCE_HIGH: number;
    const IMPORTANCE_LOW: number;
    const IMPORTANCE_MAX: number;
    const IMPORTANCE_MIN: number;
    const IMPORTANCE_NONE: number;
    const IMPORTANCE_UNSPECIFIED: number;
    function getNotificationChannel(channelId: any): Promise<any>;
    function openAppNotificationSettings(channelId: any): Promise<any>;
    function openNotificationChannelSettings(channelId: any): Promise<any>;
    function _getNotificationChannel(channelId: any, onSuccess: any, onFail: any): void;
    function _openAppNotificationSettings(onSuccess: any, onFail: any): void;
    function _openNotificationChannelSettings(channelId: any, onSuccess: any, onFail: any): void;
}
