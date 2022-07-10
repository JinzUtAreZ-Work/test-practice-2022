import type { AnySchema, Asserts, BaseSchema, TypeOf } from 'yup';
import type Lazy from 'yup/lib/lazy';
import type { AnyObject, Maybe, Optionals } from 'yup/library/types';

interface DateFormatOption {
  format?: DateFormat;
}

interface FilesOption {
  limit?: number;
  extensions?: string[];
}

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends BaseSchema<TType, TContext, TOut> {
    dateFormat(options?: DateFormatOption): DateSchema<TType, TContext>;
  }

  interface ArraySchema<
    T extends AnySchema | Lazy<any, any>,
    C extends AnyObject = AnyObject,
    TIn extends Maybe<TypeOf<T>[]> = TypeOf<T>[] | undefined,
    TOut extends Maybe<Asserts<T>[]> = Asserts<T>[] | Optionals<TIn>,
  > extends BaseSchema<TIn, C, TOut> {
    files(options?: FilesOption): ArraySchema<TIn, TOut>;
    duplicateFiles(fieldsToCompare: string[]): ArraySchema<TIn, TOut>;
    dateRangeFormat(options?: DateFormatOption): ArraySchema<TIn, TOut>;
  }
}
