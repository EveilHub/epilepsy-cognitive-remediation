import { ChangeEvent } from "react"

type LabelInputOuiNonTypes = {
    paragraphTxt: string;
    width: string;
    htmlForLabelOne: string;
    idOne: string;
    nameOne: string;
    valueOne: string;
    checkedOne: boolean;
    onChangeOne: (e: ChangeEvent<HTMLInputElement>) => void;
    textOne: string;
    htmlForLabelTwo: string;
    idTwo: string;
    nameTwo: string;
    valueTwo: string;
    checkedTwo: boolean;
    onChangeTwo: (e: ChangeEvent<HTMLInputElement>) => void;
    textTwo: string;
};

export default function LabelInputOuiNon(
    {
        paragraphTxt, 
        width,
        htmlForLabelOne,
        idOne,
        nameOne,
        valueOne,
        checkedOne,
        onChangeOne,
        textOne,
        htmlForLabelTwo,
        idTwo,
        nameTwo,
        valueTwo,
        checkedTwo,
        onChangeTwo,
        textTwo
    }: LabelInputOuiNonTypes) {
    return (
        <div>
            <p className={`${idOne === "accepterTest" ? "mt-0" : "mt-8"} mb-4`}>{paragraphTxt}</p>

            <div className={`${width} flex flex-row items-center justify-around py-2 bg-emerald-50 border border-emerald-100 dark:text-teal-400 dark:bg-teal-50 dark:border-teal-100 rounded-lg`}>

                <label htmlFor={htmlForLabelOne}>
                <input 
                    type="radio"
                    id={idOne}
                    name={nameOne}
                    value={valueOne}
                    checked={checkedOne}
                    onChange={onChangeOne}
                    className="mr-2"
                />
                {textOne}
                </label>

                <label htmlFor={htmlForLabelTwo}>
                <input 
                    type="radio"
                    id={idTwo}
                    name={nameTwo}
                    value={valueTwo}
                    checked={checkedTwo}
                    onChange={onChangeTwo}
                    className="mr-2"
                />
                {textTwo}
                </label>

            </div>
        </div>
    );
};