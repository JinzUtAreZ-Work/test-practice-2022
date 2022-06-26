import type { FormikState, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
declare module 'formik' {
  interface FormikInstance<FormValues> {
    initialValues: FormValues;
    initialErrors: FormikErrors<unknown>;
    initialTouched: FormikTouched<unknown>;
    initialStatus: any;
    handleBlur: {
      (e: React.FocusEvent<any>): void;
      <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    handleChange: {
      (e: React.ChangeEvent<any>): void;
      <T_1 = string | React.ChangeEvent<any>>(
        field: T_1,
      ): T_1 extends React.ChangeEvent<any>
        ? void
        : (e: string | React.ChangeEvent<any>) => void;
    };
    handleReset: (e: any) => void;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    resetForm: (
      nextState?: Partial<FormikState<FormValues>> | undefined,
    ) => void;
    setErrors: (errors: FormikErrors<FormValues>) => void;
    setFormikState: (
      stateOrCb:
        | FormikState<FormValues>
        | ((state: FormikState<FormValues>) => FormikState<FormValues>),
    ) => void;
    setFieldTouched: (
      field: string,
      touched?: boolean,
      shouldValidate?: boolean | undefined,
    ) => Promise<FormikErrors<FormValues>> | Promise<void>;
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined,
    ) => Promise<FormikErrors<FormValues>> | Promise<void>;
    setFieldError: (field: string, value: string | undefined) => void;
    setStatus: (status: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    setTouched: (
      touched: FormikTouched<FormValues>,
      shouldValidate?: boolean | undefined,
    ) => Promise<FormikErrors<FormValues>> | Promise<void>;
    setValues: (
      FormValues: React.SetStateAction<FormValues>,
      shouldValidate?: boolean | undefined,
    ) => Promise<FormikErrors<FormValues>> | Promise<void>;
    submitForm: () => Promise<any>;
    validateForm: (
      FormValues?: FormValues,
    ) => Promise<FormikErrors<FormValues>>;
    validateField: (
      name: string,
    ) => Promise<void> | Promise<string | undefined>;
    isValid: boolean;
    dirty: boolean;
    unregisterField: (name: string) => void;
    registerField: (name: string, { validate }: any) => void;
    getFieldProps: (nameOrOptions: any) => FieldInputProps<any>;
    getFieldMeta: (name: string) => FieldMetaProps<any>;
    getFieldHelpers: (name: string) => FieldHelperProps<any>;
    validateOnBlur: boolean;
    validateOnChange: boolean;
    validateOnMount: boolean;
    values: FormValues;
    errors: FormikErrors<FormValues>;
    touched: FormikTouched<FormValues>;
    isSubmitting: boolean;
    isValidating: boolean;
    status?: any;
    submitCount: number;
  }
}
