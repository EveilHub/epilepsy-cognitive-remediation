import { ChangeEvent } from "react"

type LabelInputOuiNonTypes = {
    paragraphTxt: string;
    width: string;
    htmlForLabelOne: string;
    idOne: string;
    name: string;
    valueOne: string;
    checkedOne: boolean;
    onChangeOne: (e: ChangeEvent<HTMLInputElement>) => void;
    textOne: string;
    htmlForLabelTwo: string;
    idTwo: string;
    valueTwo: string;
    checkedTwo: boolean;
    textTwo: string;
};

export default function LabelInputOuiNon(
    {
        paragraphTxt, 
        width,
        name,
        htmlForLabelOne,
        idOne,
        valueOne,
        checkedOne,
        onChangeOne,
        textOne,
        htmlForLabelTwo,
        idTwo,
        valueTwo,
        checkedTwo,
        textTwo
    }: LabelInputOuiNonTypes) {
    return (
        <div>
            <p className={`${idOne === "accepterTest" ? "mt-0" : "mt-8"} mb-4`}>{paragraphTxt}</p>

            <div className={`${width} flex flex-row items-center justify-around py-2 bg-teal-50 border border-teal-100 dark:bg-cyan-50 dark:border-cyan-100 rounded-lg`}>

                <label htmlFor={htmlForLabelOne}>
                <input 
                    type="radio"
                    id={idOne}
                    name={name}
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
                    name={name}
                    value={valueTwo}
                    checked={checkedTwo}
                    onChange={onChangeOne}
                    className="mr-2"
                />
                {textTwo}
                </label>

            </div>
        </div>
    );
};