import { IconSpeed } from '@/assets/image';
import { ButtonRounded } from '@/components/UI';
import RaceModal from './RaceModal';

interface Props {
  isModalOpen: boolean;
  isSocketConnected: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
  windowWidth: number;
  classNameButton?: string;
}

export default function RaceButtonAndModal(props: Props) {
  const {
    isModalOpen,
    isSocketConnected,
    onModalOpen,
    onModalClose,
    windowWidth,
    classNameButton,
  } = props;

  return (
    <>
      <ButtonRounded
        className={`${classNameButton}`}
        onClick={() => onModalOpen()}
        active={isModalOpen}
      >
        <IconSpeed />
        <span>Multiplayer{windowWidth > 585 ? ' (1 Vs 1)' : ''}</span>
      </ButtonRounded>
      {isModalOpen && (
        <RaceModal
          isSocketConnected={isSocketConnected}
          onCloseModal={onModalClose}
        />
      )}
    </>
  );
}
