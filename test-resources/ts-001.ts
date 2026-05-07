/**
 * Constant number
 *   Value: 1
 *   Type: number
 *   Exported: true
 */
export const a1: number = 1;

// Constant number
//   Value: 1
//   Type: number
//   Exported: true
export const a2: Int = 1;

declare const ParameterDecorator1: ParameterDecorator;
declare const PropertyDecorator1: PropertyDecorator;

export class ClassA {
    @PropertyDecorator1
    method1(@ParameterDecorator1 param1: string): void {
        console.log(param1);
    }
}

/** Type alias for number */
type Int = number;
