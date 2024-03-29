import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from '../theme';
import { Route, Routes, Navigate } from 'react-router-native';
import SingleRepository from './SingleRepository';
import ReviewForm from './ReviewForm';
import MyReviewList from './MyReviewList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.backGroundColor.main,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/repository/:id' element={<SingleRepository />} />
        <Route path='/createReview' element={<ReviewForm />} />
        <Route path='/myReviews' element={<MyReviewList />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;
