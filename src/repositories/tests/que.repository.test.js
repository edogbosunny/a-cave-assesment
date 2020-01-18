import mongoose from 'mongoose'
import { dbConfig } from '../../config/keys';
import Que from '../../models/que-model';
import mock from '../../utils/mocks/mocks';


describe('Course Repository test', () => {
  beforeAll(async () => {
    // refactor connection much later
    await mongoose.connect(dbConfig(), { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  it('should create a que', async () => {
    const createdQue = await new Que(mock.quePayload).save();
    expect(createdQue.phone_number).toBe('+123')
  })

})
