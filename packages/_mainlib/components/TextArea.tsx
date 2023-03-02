import { colors } from '../constants/colors';
import React, { useState } from 'react';
import clsx from 'clsx';

export type TextAreaAttributes = {
  value?: string;
  height?: string;
} & Pick<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  | 'autoComplete'
  | 'autoFocus'
  | 'disabled'
  | 'maxLength'
  | 'minLength'
  | 'name'
  | 'readOnly'
  | 'rows'
  | 'placeholder'
  | 'onChange'
  | 'onFocus'
  | 'onBlur'
  | 'onClick'
>;

export type Props = {
  /**
   * 컴포넌트의 root element(`div`)에 추가되는 className입니다.
   */
  className?: string;

  /**
   * 에러 상태를 표시합니다.
   */
  hasError?: boolean;
} & TextAreaAttributes;

function TextArea({
  disabled,
  hasError,
  className,
  onFocus,
  onBlur,
  height = '80px',
  ...textareaAttrs
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={clsx(
        className,
        'relative flex justify-between items-center transition rounded-[12px] p-4 h-auto bg-gray-100',
      )}
      // css={[
      //   css`
      //     transition: background-color 0.2s ease;
      //     box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
      //   `,
      //   hasError
      //     ? css`
      //         caret-color: ${colors.red600};
      //         background-color: rgba(183, 28, 28, 0.05);
      //       `
      //     : null,
      //   isFocused
      //     ? css`
      //         background-color: rgba(25, 74, 166, 0.05);
      //       `
      //     : null,
      // ]}
    >
      <textarea
        className={`bg-transparent border-none appearance-none overflow-hidden resize-none min-w-0 w-full text-gray-900 min-h-[${height}] focus:outline-none`}
        // css={css`
        //   box-shadow: 0;
        // `}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        {...textareaAttrs}
      />
    </div>
  );
}

export default TextArea;
