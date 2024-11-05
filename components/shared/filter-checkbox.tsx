import { Checkbox } from '../ui';

export interface FilterCheckboxProps {
   text: string;
   value: string;
   endAdornment?: React.ReactNode;
   onCheckedChange?: (checked: boolean) => void;
   checked?: boolean;
   type: string
}

export const FilterCheckbox = ({
   text,
   value,
   endAdornment,
   onCheckedChange,
   checked,
   type
}: FilterCheckboxProps) => {
   return (
      <div className="flex items-center space-x-2">
         <Checkbox
            onCheckedChange={onCheckedChange}
            checked={checked}
            value={value}
            className="rounded-[8px] w-6 h-6"
            id={`checkbox-${String(type)}-${String(value)}`}
         />
         <label htmlFor={`checkbox-${String(type)}-${String(value)}`} className="leading-none cursor-pointer flex-1">
            {text}
         </label>
         {endAdornment}
      </div>
   );
};
