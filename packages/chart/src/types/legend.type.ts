import { Formatter } from 'recharts/types/component/DefaultLegendContent';
import { SeriaProps } from './seria.type';
import { DataDynamicBooleanProps } from './utils/data.type';

export interface LegendProps {
    /**
     * Выравнивание элементов легенды в вертикальном направлении.
     */
    verticalAlign?: 'top' | 'middle' | 'bottom';
    /**
     * Функция форматирования каждого текста в легенде.
     */
    formatter?: Formatter;
    /**
     * Выравнивание элементов легенды в горизонтальном направлении.
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Вертикальный отстуа
     */
    marginTop?: number;
    /**
     * Выщитывается автоматически
     */
    margin?: {
        top?: number;
    };
}

export interface CustomLegendProps {
    legend: LegendProps;
    series: SeriaProps[];
    id: string;
}

export interface LegendComponentProps {
    legend: LegendProps;
    series: SeriaProps[];
    id: string;
    charts: DataDynamicBooleanProps;
    toggleChart(item: SeriaProps): void;
}
