import { Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";

const TakeSubscriptionModal = ({ setIsOpen, isOpen }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
  
          <form className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full h-2/6 max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-t backdrop-blur-xl border to-[#040404]/0 from-[#040404]/10  p-6 text-left align-middle z-50 relative text-white shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-4xl md:text-5xl font-medium text-center leading-tight  text-white"
                  >
                    Enjoy <br /> Our free trial <br /> month
                  </DialogTitle>
                  <p className="text-center py-7">
                    Do not miss out Premium top quality News, all the content at a
                    click.
                  </p>
  
                  <div className="flex  justify-center gap-5">
                    <button
                      type="button"
                      className="font-bold uppercase text-xs ml-6 mr-5 py-1 md:py-2 rounded-full px-3 md:px-6 bg-[#FF2400] transition-all shadow-md duration-300 border-y border-[#FF664D] hover:bg-[#ff5537] text-white focus-visible:ring-offset-2"
                    >
                      Take Subscription
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </form>
        </Dialog>
      </Transition>
    );
};

export default TakeSubscriptionModal;