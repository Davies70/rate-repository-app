import { useNavigate } from 'react-router-native';
import Text from './Text';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import { useState } from 'react';
import useReview from '../hooks/useReview';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating must be at most 100'),
  text: yup.string(),
});

const ReviewForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { createReview } = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    const numberRating = Number(rating);
    const reviewObject = {
      ownerName,
      repositoryName,
      rating: numberRating,
      text,
    };

    try {
      const review = await createReview(reviewObject);
      review && navigate(`/repository/${review.repositoryId}`);
    } catch (e) {
      console.error(e.message);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const ownerNameError = formik.touched.ownerName && formik.errors.ownerName;
  const repositoryNameError =
    formik.touched.repositoryName && formik.errors.repositoryName;
  const ratingError = formik.touched.rating && formik.errors.rating;

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
    inputFocused: {
      height: 100,
      borderColor: theme.colors.textSecondary,
      borderWidth: 1,
      paddingLeft: 10,
      borderRadius: 3,
      paddingBottom: 50,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Repository owner name'
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
        style={[styles.input, ownerNameError && styles.inputError]}
        error={ownerNameError}
      ></TextInput>
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={styles.errorMessage}>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        placeholder='Repository name'
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
        style={[styles.input, repositoryNameError && styles.inputError]}
        error={repositoryNameError}
      ></TextInput>
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={styles.errorMessage}>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        placeholder='Rating between 0 and 100'
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
        style={[styles.input, ratingError && styles.inputError]}
      ></TextInput>
      {formik.touched.rating && formik.errors.rating && (
        <Text style={styles.errorMessage}>{formik.errors.rating}</Text>
      )}
      <TextInput
        placeholder='Review'
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
        style={[styles.input, isFocused && styles.inputFocused]}
        multiline={true}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      ></TextInput>
      <Pressable
        testID='createReviewButton'
        onPress={formik.handleSubmit}
        style={styles.button}
      >
        <Text color='white' fontWeight='bold' style={theme.colors.error}>
          Create a Review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
