/*
 * (C) Copyright IBM Corp. 2019, 2020.
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

import com.google.gson.reflect.TypeToken;
import com.ibm.cloud.sdk.core.service.model.DynamicModel;
import com.ibm.model.MessageContextSkill;

/**
 * Information specific to particular skills used by the assistant.
 *
 * <p>**Note:** Currently, only a single child property is supported, containing variables that
 * apply to the dialog skill used by the assistant.
 */
public class MessageContextSkills extends DynamicModel<com.ibm.model.MessageContextSkill> {

  public MessageContextSkills() {
    super(new TypeToken<MessageContextSkill>() {});
  }
}
