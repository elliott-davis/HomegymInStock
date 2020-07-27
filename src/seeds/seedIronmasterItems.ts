import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Items } from '../entity/Items'

export default class CreateIronmasterItems implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Items)
      .values([
        {
          type: "ironmaster",
          name: 'Quick-Lock Adjustable Dumbbell System 75 lb Set',
          link: "https://www.ironmaster.com/products/quick-lock-adjustable-dumbbells-75/",
        }, {
          type: "ironmaster",
          name: 'Quick-Lock Adjustable Dumbbell System 45 lb Set',
          link: "https://www.ironmaster.com/products/quick-lock-dumbbell-system-45-lb-set/",
        }, {
          type: "ironmaster",
          name: 'Quick-Lock Dumbbell – 120 lb Add on Kit ',
          link: "https://www.ironmaster.com/products/add-on-kit-to-120-lbs-quick-lock/",
        }]
      )
      .onConflict(`("link") DO NOTHING`)
      .execute();
  }
}
