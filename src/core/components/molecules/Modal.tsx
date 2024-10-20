import { CloseIcon, Modal as GModal, Heading, Icon, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalHeader } from "@gluestack-ui/themed"
import { FC, PropsWithChildren } from "react"

type ModalProps = {
  isOpen: boolean,
  onClose: () => void,
  title: string,
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <GModal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading>
            {title}
          </Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} size="lg"/>
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </GModal>
  )
}

export default Modal