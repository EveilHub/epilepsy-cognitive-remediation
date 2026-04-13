import { ChangeEvent } from "react";

type InputCompType = {
    paragraph: string;
    idP: string;
    nameP: string;
    valueP: string;
    onChangeP: (e: ChangeEvent<HTMLInputElement>) => void;
    widthP: string;
    minutes?: string;
};

export default function InputComp({paragraph, idP, nameP, valueP, onChangeP, widthP, minutes}: InputCompType) {
    return (
        <div>
            <p className="mt-8 mb-4">{paragraph}</p>
            <input 
                type="text"
                id={idP} 
                name={nameP}
                value={valueP} 
                onChange={onChangeP} 
                className={`${widthP} dark:text-teal-400 bg-teal-50 border border-teal-100 dark:bg-teal-50 dark:border-teal-100 rounded p-2 mr-2`}
            />
            {minutes}
        </div>
    );
};