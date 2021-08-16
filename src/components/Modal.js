import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Modal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);
  };

  return (
    <>
      <Transition appear show={props.showModal} as={Fragment}>
        <Dialog
          as="div"
          className="font-poppins fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900 text-center"
                >
                  Compra finalizada!
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 text-center">
                    Acesse meu
                    <a
                      href="https://github.com/ericbsantana"
                      className="text-blue-500 hover:text-blue-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {` Github `}
                    </a>
                    para saber mais sobre mim!
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="bg-blue-500 text-white shadow-md px-5 py-2 rounded-md font-bold hover:bg-blue-600 active:bg-blue-700"
                    onClick={closeModal}
                  >
                    Legal!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
