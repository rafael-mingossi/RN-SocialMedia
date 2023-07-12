import {NotificationRoot} from './NotificationRoot';
import {NotificationActions} from './NotificationActions';
import {NotificationActionIcon} from './NotificationActionIcon';
import {NotificationIcon} from './NotificationIcon';
import {NotificationContent} from './NotificationContent';

export const Notification = {
  Root: NotificationRoot,
  Actions: NotificationActions,
  ActionIcon: NotificationActionIcon,
  Icon: NotificationIcon,
  Content: NotificationContent,
};

/////////MODEL OLD
// <Notification.Root>
//   <Notification.Icon icon={faHeart} />
//   <Notification.Content
//     text={'Text goes here, in the middle of the container'}
//   />
//   <Notification.Actions
//     onCancel={() => console.log('CANCEL')}
//     onSubmit={() => console.log('SUBMIT')}
//   />
// </Notification.Root>

///////MODEL NEW
// <Notification.Root>
//   <Notification.Icon icon={faHeart} />
//   <Notification.Content
//     text={'Text goes here, in the middle of the container'}
//   />
//   <Notification.Actions>
//     <Notification.ActionIcon
//       icon={faAngry}
//       onPress={() => console.log('PRESSED1')}
//     />
//     <Notification.ActionIcon
//       icon={faCheckCircle}
//       onPress={() => console.log('PRESSED2')}
//     />
//   </Notification.Actions>
// </Notification.Root>
