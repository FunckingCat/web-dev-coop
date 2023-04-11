type NonNullableProps<T> = {
  [K in keyof T]-?: null extends T[K] ? never : K;
};

type CleanedObject<T> = Pick<T, NonNullableProps<T>[keyof T]>;

export type NonNullableFields<T> = CleanedObject<
Partial<T> & { [K in keyof T]: Exclude<T[K], null> }
>;
