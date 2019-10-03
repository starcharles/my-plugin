import { WebPlugin } from '@capacitor/core';
import { MyPluginPlugin } from './definitions';
export declare class MyPluginWeb extends WebPlugin implements MyPluginPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const MyPlugin: MyPluginWeb;
export { MyPlugin };
