declare const _exports: Permissions;
export = _exports;
declare function Permissions(): void;
declare class Permissions {
    ACCESS_CHECKIN_PROPERTIES: string;
    ACCESS_BACKGROUND_LOCATION: string;
    ACCESS_COARSE_LOCATION: string;
    ACCESS_FINE_LOCATION: string;
    ACCESS_LOCATION_EXTRA_COMMANDS: string;
    ACCESS_MOCK_LOCATION: string;
    ACCESS_NETWORK_STATE: string;
    ACCESS_SURFACE_FLINGER: string;
    ACCESS_WIFI_STATE: string;
    ACCOUNT_MANAGER: string;
    ACTIVITY_RECOGNITION: string;
    ADD_VOICEMAIL: string;
    AUTHENTICATE_ACCOUNTS: string;
    BATTERY_STATS: string;
    BIND_ACCESSIBILITY_SERVICE: string;
    BIND_APPWIDGET: string;
    BIND_CARRIER_MESSAGING_SERVICE: string;
    BIND_DEVICE_ADMIN: string;
    BIND_DREAM_SERVICE: string;
    BIND_INPUT_METHOD: string;
    BIND_NFC_SERVICE: string;
    BIND_NOTIFICATION_LISTENER_SERVICE: string;
    BIND_PRINT_SERVICE: string;
    BIND_REMOTEVIEWS: string;
    BIND_TEXT_SERVICE: string;
    BIND_TV_INPUT: string;
    BIND_VOICE_INTERACTION: string;
    BIND_VPN_SERVICE: string;
    BIND_WALLPAPER: string;
    BLUETOOTH: string;
    BLUETOOTH_ADMIN: string;
    BLUETOOTH_ADVERTISE: string;
    BLUETOOTH_CONNECT: string;
    BLUETOOTH_PRIVILEGED: string;
    BLUETOOTH_SCAN: string;
    BODY_SENSORS: string;
    BRICK: string;
    BROADCAST_PACKAGE_REMOVED: string;
    BROADCAST_SMS: string;
    BROADCAST_STICKY: string;
    BROADCAST_WAP_PUSH: string;
    CALL_PHONE: string;
    CALL_PRIVILEGED: string;
    CAMERA: string;
    CAPTURE_AUDIO_OUTPUT: string;
    CAPTURE_SECURE_VIDEO_OUTPUT: string;
    CAPTURE_VIDEO_OUTPUT: string;
    CHANGE_COMPONENT_ENABLED_STATE: string;
    CHANGE_CONFIGURATION: string;
    CHANGE_NETWORK_STATE: string;
    CHANGE_WIFI_MULTICAST_STATE: string;
    CHANGE_WIFI_STATE: string;
    CLEAR_APP_CACHE: string;
    CLEAR_APP_USER_DATA: string;
    CONTROL_LOCATION_UPDATES: string;
    DELETE_CACHE_FILES: string;
    DELETE_PACKAGES: string;
    DEVICE_POWER: string;
    DIAGNOSTIC: string;
    DISABLE_KEYGUARD: string;
    DUMP: string;
    EXPAND_STATUS_BAR: string;
    FACTORY_TEST: string;
    FLASHLIGHT: string;
    FORCE_BACK: string;
    GET_ACCOUNTS: string;
    GET_PACKAGE_SIZE: string;
    GET_TASKS: string;
    GET_TOP_ACTIVITY_INFO: string;
    GLOBAL_SEARCH: string;
    HARDWARE_TEST: string;
    INJECT_EVENTS: string;
    INSTALL_LOCATION_PROVIDER: string;
    INSTALL_PACKAGES: string;
    INSTALL_SHORTCUT: string;
    INTERNAL_SYSTEM_WINDOW: string;
    INTERNET: string;
    KILL_BACKGROUND_PROCESSES: string;
    LOCATION_HARDWARE: string;
    MANAGE_ACCOUNTS: string;
    MANAGE_APP_TOKENS: string;
    MANAGE_DOCUMENTS: string;
    MASTER_CLEAR: string;
    MEDIA_CONTENT_CONTROL: string;
    MODIFY_AUDIO_SETTINGS: string;
    MODIFY_PHONE_STATE: string;
    MOUNT_FORMAT_FILESYSTEMS: string;
    MOUNT_UNMOUNT_FILESYSTEMS: string;
    NFC: string;
    PERSISTENT_ACTIVITY: string;
    POST_NOTIFICATIONS: string;
    PROCESS_OUTGOING_CALLS: string;
    READ_CALENDAR: string;
    READ_CALL_LOG: string;
    READ_CONTACTS: string;
    READ_EXTERNAL_STORAGE: string;
    READ_FRAME_BUFFER: string;
    READ_HISTORY_BOOKMARKS: string;
    READ_INPUT_STATE: string;
    READ_LOGS: string;
    READ_MEDIA_AUDIO: string;
    READ_MEDIA_IMAGES: string;
    READ_MEDIA_VIDEO: string;
    READ_PHONE_STATE: string;
    READ_PROFILE: string;
    READ_SMS: string;
    READ_SOCIAL_STREAM: string;
    READ_SYNC_SETTINGS: string;
    READ_SYNC_STATS: string;
    READ_USER_DICTIONARY: string;
    READ_VOICEMAIL: string;
    REBOOT: string;
    RECEIVE_BOOT_COMPLETED: string;
    RECEIVE_MMS: string;
    RECEIVE_SMS: string;
    RECEIVE_WAP_PUSH: string;
    RECORD_AUDIO: string;
    REORDER_TASKS: string;
    RESTART_PACKAGES: string;
    SEND_RESPOND_VIA_MESSAGE: string;
    SEND_SMS: string;
    SET_ACTIVITY_WATCHER: string;
    SET_ALARM: string;
    SET_ALWAYS_FINISH: string;
    SET_ANIMATION_SCALE: string;
    SET_DEBUG_APP: string;
    SET_ORIENTATION: string;
    SET_POINTER_SPEED: string;
    SET_PREFERRED_APPLICATIONS: string;
    SET_PROCESS_LIMIT: string;
    SET_TIME: string;
    SET_TIME_ZONE: string;
    SET_WALLPAPER: string;
    SET_WALLPAPER_HINTS: string;
    SIGNAL_PERSISTENT_PROCESSES: string;
    STATUS_BAR: string;
    SUBSCRIBED_FEEDS_READ: string;
    SUBSCRIBED_FEEDS_WRITE: string;
    SYSTEM_ALERT_WINDOW: string;
    TRANSMIT_IR: string;
    UNINSTALL_SHORTCUT: string;
    UPDATE_DEVICE_STATS: string;
    USE_CREDENTIALS: string;
    USE_SIP: string;
    VIBRATE: string;
    WAKE_LOCK: string;
    WRITE_APN_SETTINGS: string;
    WRITE_CALENDAR: string;
    WRITE_CALL_LOG: string;
    WRITE_CONTACTS: string;
    WRITE_EXTERNAL_STORAGE: string;
    WRITE_GSERVICES: string;
    WRITE_HISTORY_BOOKMARKS: string;
    WRITE_PROFILE: string;
    WRITE_SECURE_SETTINGS: string;
    WRITE_SETTINGS: string;
    WRITE_SMS: string;
    WRITE_SOCIAL_STREAM: string;
    WRITE_SYNC_SETTINGS: string;
    WRITE_USER_DICTIONARY: string;
    WRITE_VOICEMAIL: string;
    hasPermission(permission: any, successCallback: any, errorCallback: any, ...args: any[]): void;
    checkPermission: (permission: any, successCallback: any, errorCallback: any) => void;
    requestPermission: (permission: any, successCallback: any, errorCallback: any, ...args: any[]) => void;
    requestPermissions: (permissions: any, successCallback: any, errorCallback: any) => void;
}
