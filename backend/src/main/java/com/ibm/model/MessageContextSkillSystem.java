/*
 * (C) Copyright IBM Corp. 2020.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
package com.ibm.model;

import com.google.gson.annotations.SerializedName;
import com.google.gson.reflect.TypeToken;
import com.ibm.cloud.sdk.core.service.model.DynamicModel;

/** System context data used by the skill. */
public class MessageContextSkillSystem extends DynamicModel<Object> {

  @SerializedName("state")
  protected String state;

  public MessageContextSkillSystem() {
    super(new TypeToken<Object>() {});
  }

  /**
   * Gets the state.
   *
   * <p>An encoded string representing the current conversation state. By saving this value and then
   * sending it in the context of a subsequent message request, you can restore the conversation to
   * the same state. This can be useful if you need to return to an earlier point in the
   * conversation. If you are using stateful sessions, you can also use a stored state value to
   * restore a paused conversation whose session has expired.
   *
   * @return the state
   */
  public String getState() {
    return this.state;
  }

  /**
   * Sets the state.
   *
   * @param state the new state
   */
  public void setState(final String state) {
    this.state = state;
  }
}
