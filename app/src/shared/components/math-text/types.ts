import { type TextProps } from 'antd/es/typography/Text';

export interface IMathTextProps extends TextProps {
  children: string
  separator?: string
}
