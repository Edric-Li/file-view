import { Service } from 'egg';
import Office from './Office';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    Office.pptToPdf();
    return `hi, ${name}`;
  }
}
