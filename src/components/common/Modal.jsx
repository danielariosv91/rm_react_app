import { useEffect, useState } from "react";

function Modal({ content }) {
    useEffect(() => {
        if (!content) return;

        document.getElementById('modal_character').showModal()
    }, [content])

    return (
        <dialog id="modal_character" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{content?.name}</h3>
                <p className="py-4">{content?.episode}</p>
                <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin varius ullamcorper lobortis. Sed eget sem risus</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default Modal;