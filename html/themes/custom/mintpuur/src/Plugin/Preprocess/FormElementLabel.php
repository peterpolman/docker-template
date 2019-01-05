<?php
namespace Drupal\mintpuur\Plugin\Preprocess;
use Drupal\bootstrap\Plugin\Preprocess\FormElementLabel as BaseFormElementLabel;
use Drupal\bootstrap\Utility\Element;
use Drupal\bootstrap\Utility\Variables;
/**
 * Pre-processes variables for the "form_element_label" theme hook.
 *
 * @ingroup plugins_preprocess
 *
 * @BootstrapPreprocess("form_element_label")
 */
class FormElementLabel extends BaseFormElementLabel {
  /**
   * {@inheritdoc}
   */
  public function preprocessElement(Element $element, Variables $variables) {
    // Map the element properties.
    $variables->map(['attributes', 'is_checkbox', 'is_radio', 'tooltip']);

    parent::preprocessElement($element, $variables);
  }
}
