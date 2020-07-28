import { SubscriptionController } from './Subscriptions/Subscription';
import { OverviewController } from './Subscriptions/Overview';
import { ItemsController } from './Items/Items';

const subscriptionController = new SubscriptionController();
const itemsController = new ItemsController();
const overviewController = new OverviewController();

export {
  subscriptionController,
  itemsController,
  overviewController
};
