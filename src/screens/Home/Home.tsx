import React, {FC, useState} from 'react';
import styles from './home.styles';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Title from '../../components/Title/Title';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {data, posts} from '../../utils/data';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/Navigator';

type DataType = {
  name: string;
  image: string;
  id: number;
};

type DataPostsType = {
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
  image: string;
  imageUser: string;
  id: number;
};

type PaginationType = (
  dataValues: Array<DataType>,
  pageNum: number,
  pages: number,
) => DataType[];

type PaginationPostsType = (
  dataPostsValues: Array<DataPostsType>,
  pageNum: number,
  pages: number,
) => DataPostsType[];

type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, 'Home'>;
};
const Home: FC<HomeProps> = ({navigation}) => {
  const pageSize = 4;
  const pageSizePosts = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [pageNumberPosts, setPageNumberPosts] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );

  const pagination: PaginationType = (dataValues, pageNum, pages) => {
    let startIndex = (pageNum - 1) * pages;
    if (startIndex > dataValues.length) {
      return [];
    }

    setPageNumber(pageNum);
    return dataValues.slice(startIndex, startIndex + pages);
  };

  const paginationPosts: PaginationPostsType = (
    dataPostsValues,
    pageNum,
    pages,
  ) => {
    let startIndex = (pageNum - 1) * pages;
    if (startIndex > dataPostsValues.length) {
      return [];
    }

    setPageNumberPosts(pageNum);
    return dataPostsValues.slice(startIndex, startIndex + pages);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Title>Let's Explore</Title>
        <Pressable style={styles.icon}>
          <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20} />
          <View style={styles.counter}>
            <Text style={styles.counterTxt}>2</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.userStory}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!loading) {
              setLoading(true);
              setRenderedData(prev => [
                ...prev,
                ...pagination(data, pageNumber + 1, pageSize),
              ]);
              setLoading(false);
            }
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={renderedData}
          renderItem={({item}) => (
            <UserStory name={item.name} image={item.image} />
          )}
        />
      </View>
      <View style={styles.userPostContainer}>
        <FlatList
          // ListHeaderComponent={() => {
          //   return<></>
          // }}
          onMomentumScrollBegin={() => setLoadingPosts(false)}
          keyExtractor={item => item.id + Math.random().toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!loadingPosts) {
              setLoadingPosts(true);
              setRenderedDataPosts(prev => [
                ...prev,
                ...paginationPosts(posts, pageNumberPosts + 1, pageSizePosts),
              ]);
              setLoadingPosts(false);
            }
          }}
          showsVerticalScrollIndicator={false}
          data={renderedDataPosts}
          renderItem={({item}) => (
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              image={item.image}
              imageUser={item.imageUser}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
