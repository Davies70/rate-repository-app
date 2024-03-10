import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import SignInContainer from '../components/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      render(<SignInContainer onSubmit={onSubmit} />);
      fireEvent.changeText(
        screen.getByPlaceholderText('Username'),
        'myusername'
      );
      fireEvent.changeText(
        screen.getByPlaceholderText('Password'),
        'mypassword'
      );
      fireEvent.press(screen.getByTestId('submitButton'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'myusername',
          password: 'mypassword',
        });
      });
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
