<?php

namespace Drupal\mintpuur\Plugin\Preprocess;

use Drupal\bootstrap\Plugin\Preprocess\FormElement as BaseFormElement;
use Drupal\bootstrap\Utility\Element;
use Drupal\bootstrap\Utility\Variables;

/**
 * Pre-processes variables for the "form_element" theme hook.
 *
 * @ingroup plugins_preprocess
 *
 * @BootstrapPreprocess("form_element")
 */
class FormElement extends BaseFormElement {

  /**
   * {@inheritdoc}
   */
  public function preprocessElement(Element $element, Variables $variables) {
    // Add layout classes to variables.
    $variables['layout_classes'] = $element->getProperty('layout_classes');

    // Add tooltip to label variables.
    $tooltip = $element->getProperty('tooltip');

    if (!empty($tooltip)) {
      $label = Element::create($variables['label']);
      $label->setProperty('tooltip', $tooltip );
    }

    parent::preprocessElement($element, $variables);
  }

}
