import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';

const DELAY = 300;

export const useForm = <T>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);

  const onFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      // let validateValue = value;
      // if (type === 'number') {
      //   validateValue = value.replace(/[^0-9]/, '');
      // }
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const onDebounceFormChange = useCallback(
    (debounceFn: any) =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
        debounceFn(value);
      }, DELAY),
    [],
  );

  const onFormReset = useCallback(() => setForm(initialState), []);

  return { form, setForm, onFormChange, onDebounceFormChange, onFormReset };
};

export default useForm;
