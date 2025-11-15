// src/components/Modal/Modal.test.tsx
// import { fireEvent, render, screen } from '@testing-library/react';

// import { Modal } from './Modal';

// describe('Modal', () => {
//   const mockOnClose = jest.fn();

//   beforeEach(() => {
//     mockOnClose.mockClear();
//   });

//   it('renders nothing when isOpen is false', () => {
//     const { container } = render(
//       <Modal isOpen={false} onClose={mockOnClose}>
//         <p>Modal Content</p>
//       </Modal>,
//     );

//     expect(container.firstChild).toBeNull();
//   });

//   it('renders modal content when isOpen is true', () => {
//     render(
//       <Modal isOpen={true} onClose={mockOnClose}>
//         <p>Modal Content</p>
//       </Modal>,
//     );

//     expect(screen.getByText('Modal Content')).toBeInTheDocument();
//   });

//   it('calls onClose when close button is clicked', () => {
//     render(
//       <Modal isOpen={true} onClose={mockOnClose}>
//         <p>Modal Content</p>
//       </Modal>,
//     );

//     const closeButton = screen.getByRole('button');
//     fireEvent.click(closeButton);

//     expect(mockOnClose).toHaveBeenCalledTimes(1);
//   });

//   // backdrop 클릭 테스트는 의도적으로 제외
//   // stopPropagation 테스트는 의도적으로 제외
//   // useEffect cleanup 테스트는 의도적으로 제외
// });
