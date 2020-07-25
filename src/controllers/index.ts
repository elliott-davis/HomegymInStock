import { SubscriptionController } from './Subscriptions/Subscription';
import { ItemsController } from './Items/Items';

const subscriptionController = new SubscriptionController();
const itemsController = new ItemsController();

export {
    subscriptionController,
    itemsController
};
