import Text from './Text';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const passwordError = formik.touched.password && formik.errors.password;
  const usernameError = formik.touched.username && formik.errors.username;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.backGroundColor.white,
      justifyContent: 'space-around',
      gap: 10,
      padding: 20,
    },
    input: {
      borderColor: theme.colors.textSecondary,
      borderWidth: 1,
      height: 50,
      paddingLeft: 10,
      borderRadius: 3,
    },

    button: {
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
      height: 50,
    },

    inputError: {
      borderColor: theme.colors.error,
    },
    errorMessage: {
      color: theme.colors.error,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={[styles.input, usernameError && styles.inputError]}
        error={usernameError}
      ></TextInput>
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorMessage}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
        style={[styles.input, passwordError && styles.inputError]}
        error={passwordError}
      ></TextInput>
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorMessage}>{formik.errors.password}</Text>
      )}
      <Pressable
        testID='submitButton'
        onPress={formik.handleSubmit}
        style={styles.button}
      >
        <Text color='white' fontWeight='bold' style={theme.colors.error}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};
export default SignInContainer;
