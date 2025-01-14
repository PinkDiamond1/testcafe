import { DEVTOOLS_COMMAND_TYPE, DevToolsRecorderStep } from '../types';
import { NavigateCommandTransformer } from './navigate';
import { SetViewportCommandTransformer } from './set-viewport';
import { ClickCommandTransformer } from './click';
import { ChangeCommandTransformer } from './change';
import { KeyDownCommandTransformer } from './key-down';
import { KeyUpCommandTransformer } from './key-up';
import { ScrollCommandTransformer } from './scroll';
import { WaitForExpressionCommandTransformer } from './wait-for-expression';
import { WaitForElementCommandTransformer } from './wait-for-element';
import { CommandTransformerBase } from './base';

export class CommandTransformerFactory {
    static create (step: DevToolsRecorderStep, callsite: number): CommandTransformerBase | null {
        switch (step.type) {
            case DEVTOOLS_COMMAND_TYPE.navigate: return new NavigateCommandTransformer(step, callsite);
            case DEVTOOLS_COMMAND_TYPE.setViewport: return new SetViewportCommandTransformer(step, callsite);
            case DEVTOOLS_COMMAND_TYPE.click: return new ClickCommandTransformer(step, callsite);
            case DEVTOOLS_COMMAND_TYPE.change: return new ChangeCommandTransformer(step, callsite);
            case DEVTOOLS_COMMAND_TYPE.keyDown: return new KeyDownCommandTransformer(step, callsite);
            case DEVTOOLS_COMMAND_TYPE.keyUp: return new KeyUpCommandTransformer(step, callsite);
            case DEVTOOLS_COMMAND_TYPE.scroll: return new ScrollCommandTransformer(step, callsite);
            case DEVTOOLS_COMMAND_TYPE.waitForExpression: return new WaitForExpressionCommandTransformer(step, callsite);
            case DEVTOOLS_COMMAND_TYPE.waitForElement: return new WaitForElementCommandTransformer(step, callsite);
            case DEVTOOLS_COMMAND_TYPE.close: return null;
        }

        throw new Error('Incorrect command: ' + step.type);
    }
}
