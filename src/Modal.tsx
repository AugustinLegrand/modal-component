import React from "react";
import { Color, ModalInterface } from "./interfaces/ModalInterface";

export default function Modal(modal: ModalInterface): JSX.Element
{

    return (
        <div className="modal-component">
            <div className="modal-component-content">
                <p>{ modal.message }</p>
            </div>
        </div>
    )

}
