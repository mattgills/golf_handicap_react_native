import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import HandicapScreen from '../screens/HandicapScreen';

const HandicapRoute = () => <HandicapScreen/>;

const CourseRoute = () => <Text>Course Data</Text>;

const ScreenContainerWithFooterNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'handicap', title: 'Handicap', icon: 'numeric-3-circle-outline' },
    { key: 'courses', title: 'Courses', icon: 'golf' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    handicap: HandicapRoute,
    courses: CourseRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default ScreenContainerWithFooterNav;